// Utility to send form submissions directly to gajananaconstructionsinfo@gmail.com
// Uses FormSubmit AJAX API with reliable response verification, mailto fallback, and WhatsApp deep-links.

export const RECIPIENT_EMAIL = 'gajananaconstructionsinfo@gmail.com';
export const WHATSAPP_NUMBER = '918884238688';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

/**
 * Builds a direct mailto: link prefilled with complete form data
 */
export function buildMailtoUrl(payload) {
  const isQuote = payload.type === 'Engineering Takeoff & BOQ Estimation' || Boolean(payload.builtUpArea);
  const isQuickQuote = payload.type === 'Quick Material Quotation';

  const customerName = payload.name || payload.customer?.name || 'Customer';
  const customerPhone = payload.phone || payload.customer?.phone || 'Not Provided';
  const customerEmail = payload.email || payload.customer?.email || 'Not Provided';
  const customerLocation = payload.location || payload.customer?.location || 'Not Specified';
  const ticketId = payload.ticketId || payload.id || `GC-${Date.now().toString().slice(-6)}`;

  let subject = `[Gajanana Website Inquiry] ${customerName} (${ticketId})`;
  if (isQuote) {
    subject = `[Gajanana Quotation Request] ${payload.builtUpArea || ''} sq.ft - ${customerName} (${ticketId})`;
  } else if (isQuickQuote) {
    subject = `[Gajanana Material Quote] ${payload.requirement || payload.materials || 'SKU'} - ${customerName} (${ticketId})`;
  }

  let body = `Hello Gajanana Traders & Constructions Team,\n\n`;
  body += `Here are the details submitted from your website form:\n\n`;
  body += `----------------------------------------\n`;
  body += `Ticket Reference: ${ticketId}\n`;
  body += `Type: ${payload.type || 'General Inquiry'}\n`;
  body += `Customer Name: ${customerName}\n`;
  body += `Phone Number: ${customerPhone}\n`;
  body += `Email: ${customerEmail}\n`;
  body += `Site Location: ${customerLocation}\n`;

  if (payload.interest) {
    body += `Area of Interest: ${payload.interest}\n`;
  }
  if (payload.projectType) {
    body += `Project Category: ${payload.projectType}\n`;
  }
  if (payload.builtUpArea) {
    body += `Built-Up Area: ${payload.builtUpArea} sq.ft\n`;
  }
  if (payload.qualityGrade) {
    body += `Specification Grade: ${payload.qualityGrade}\n`;
  }
  if (payload.timeline) {
    body += `Timeline: ${payload.timeline}\n`;
  }
  if (payload.requirement || payload.materials) {
    body += `Requested Item/SKU: ${payload.requirement || payload.materials}\n`;
  }
  if (payload.quantity) {
    body += `Quantity: ${payload.quantity}\n`;
  }
  if (payload.estimationTakeoff) {
    const t = payload.estimationTakeoff;
    body += `\nEstimated Physical Consumption:\n`;
    body += `- TMT Steel Fe 550D: ${t.estSteelQty} MT\n`;
    body += `- 53G Cement: ${t.estCementQty} Bags\n`;
    body += `- M-Sand & Coarse: ${t.estSandQty} Tons\n`;
    body += `- JCB & Excavator Fleet: ~${t.estJcbHours} Hours\n`;
    body += `- RMC Concrete: ${t.estRmcQty} cu.m\n`;
    body += `- AAC Masonry Blocks: ${t.estBlocksQty} Units\n`;
  }

  const notes = payload.message || payload.customer?.notes || payload.notes;
  if (notes) {
    body += `\nMessage / Notes:\n${notes}\n`;
  }

  body += `----------------------------------------\n`;
  body += `Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`;

  return `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Builds a direct WhatsApp chat link with prefilled message
 */
export function buildWhatsAppUrl(payload) {
  const customerName = payload.name || payload.customer?.name || 'Customer';
  const customerPhone = payload.phone || payload.customer?.phone || '';
  const ticketId = payload.ticketId || payload.id || `GC-${Date.now().toString().slice(-6)}`;
  const area = payload.builtUpArea ? ` for ${payload.builtUpArea} sq.ft` : '';
  const item = payload.requirement || payload.materials ? ` for ${payload.requirement || payload.materials}` : '';

  let text = `Hello Gajanana Constructions & Materials,\nI submitted inquiry *${ticketId}*${area}${item}.\nName: ${customerName}\nPhone: ${customerPhone}`;
  if (payload.location || payload.customer?.location) {
    text += `\nLocation: ${payload.location || payload.customer?.location}`;
  }
  text += `\nPlease connect with me regarding pricing and specifications.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Dispatches inquiry and quotation data directly to gajananaconstructionsinfo@gmail.com
 * @param {Object} payload 
 * @returns {Promise<{success: boolean, needsActivation?: boolean, message?: string, data?: any}>}
 */
export async function sendEmailNotification(payload) {
  try {
    const isQuote = payload.type === 'Engineering Takeoff & BOQ Estimation' || Boolean(payload.builtUpArea);
    const isQuickQuote = payload.type === 'Quick Material Quotation';
    
    const customerName = payload.name || payload.customer?.name || 'Customer';
    const customerPhone = payload.phone || payload.customer?.phone || 'Not Provided';
    const customerEmail = payload.email || payload.customer?.email || 'Not Provided';
    const customerLocation = payload.location || payload.customer?.location || 'Not Specified';
    const ticketId = payload.ticketId || payload.id || `GC-${Date.now().toString().slice(-6)}`;

    let subject = `[Gajanana Website] New Inquiry from ${customerName}`;
    if (isQuote) {
      subject = `[Gajanana Quotation Request] ${payload.builtUpArea || ''} sq.ft - ${customerName}`;
    } else if (isQuickQuote) {
      subject = `[Gajanana Material Quote] ${payload.requirement || payload.materials || 'SKU'} - ${customerName}`;
    }

    // Build structured data for FormSubmit table layout
    const formattedData = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _replyto: customerEmail && customerEmail.includes('@') ? customerEmail : RECIPIENT_EMAIL,
      Reference_ID: ticketId,
      Submission_Type: payload.type || 'General Inquiry',
      Customer_Name: customerName,
      Phone_Number: customerPhone,
      Email_Address: customerEmail,
      Project_Location: customerLocation,
    };

    if (payload.interest) {
      formattedData['Area_of_Interest'] = payload.interest;
    }

    if (payload.projectType) {
      formattedData['Project_Category'] = payload.projectType;
    }

    if (payload.builtUpArea) {
      formattedData['Built_Up_Area'] = `${payload.builtUpArea.toLocaleString ? payload.builtUpArea.toLocaleString('en-IN') : payload.builtUpArea} sq.ft`;
    }

    if (payload.qualityGrade) {
      const grades = {
        standard: 'Standard Grade (IS 456)',
        premium: 'Premium Architectural (High Ductility 550D)',
        luxury: 'Luxury Signature (Engineered Elite)'
      };
      formattedData['Specification_Grade'] = grades[payload.qualityGrade] || payload.qualityGrade;
    }

    if (payload.timeline) {
      formattedData['Groundbreaking_Timeline'] = payload.timeline;
    }

    if (payload.selectedMaterials && typeof payload.selectedMaterials === 'object') {
      const selected = Object.entries(payload.selectedMaterials)
        .filter(([, checked]) => Boolean(checked))
        .map(([key]) => {
          const names = {
            jcb: 'JCB 3DX & Heavy Excavators Fleet',
            steel: 'TMT Steel Fe 550D Primary Mills',
            cement: 'Fresh Batch 53G Portland Cement',
            aggregates: 'Washed M-Sand & 20mm Blue Metal',
            rmc: 'Transit Mix Concrete (M20-M40)',
            blocks: 'AAC Lightweight Masonry Blocks'
          };
          return names[key] || key;
        });
      formattedData['Required_Logistics_Packages'] = selected.join(', ');
    }

    if (payload.requirement || payload.materials) {
      formattedData['Requested_Item_or_SKU'] = payload.requirement || payload.materials;
    }

    if (payload.quantity) {
      formattedData['Requested_Quantity'] = payload.quantity;
    }

    if (payload.estimationTakeoff) {
      const { estSteelQty, estCementQty, estSandQty, estJcbHours, estRmcQty, estBlocksQty } = payload.estimationTakeoff;
      formattedData['BOQ_Takeoff_Steel'] = `${estSteelQty} MT (Tata Tiscon / Primary 550D)`;
      formattedData['BOQ_Takeoff_Cement'] = `${estCementQty} Bags (UltraTech 53G HDPE)`;
      formattedData['BOQ_Takeoff_Sand_Aggregates'] = `${estSandQty} Tons (M-Sand & 20mm)`;
      formattedData['BOQ_Takeoff_JCB_Fleet'] = `~${estJcbHours} Hours (Excavation & Grading)`;
      formattedData['BOQ_Takeoff_RMC'] = `${estRmcQty} cu.m (Transit Mix Concrete)`;
      formattedData['BOQ_Takeoff_Blocks'] = `${estBlocksQty} Units (AAC Masonry Blocks)`;
      formattedData['Pricing_Policy'] = 'Price on Enquiry (Zero Brokerage)';
    }

    const notes = payload.message || payload.customer?.notes || payload.notes;
    if (notes) {
      formattedData['Customer_Notes_Message'] = notes;
    }

    formattedData['Submission_Timestamp'] = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const response = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formattedData)
    });

    const resJson = await response.json().catch(() => null);

    // FormSubmit returns HTTP 200 even when success is "false" (e.g. activation pending)
    const isSuccess = Boolean(resJson && (resJson.success === true || resJson.success === 'true'));
    const needsActivation = Boolean(resJson?.message && resJson.message.toLowerCase().includes('activation'));

    if (isSuccess) {
      return {
        success: true,
        needsActivation: false,
        message: 'Delivered to gajananaconstructionsinfo@gmail.com',
        data: resJson
      };
    } else {
      console.warn('FormSubmit dispatch status note:', resJson);
      return {
        success: false,
        needsActivation,
        message: resJson?.message || 'Email dispatch pending verification.',
        data: resJson
      };
    }
  } catch (error) {
    console.error('Error in sendEmailNotification:', error);
    return {
      success: false,
      needsActivation: false,
      message: error.message
    };
  }
}
