// Utility to send form submissions directly to gajananaconstructionsinfo@gmail.com
// Uses FormSubmit AJAX API which runs serverlessly on static clients like GitHub Pages.

export const RECIPIENT_EMAIL = 'gajananaconstructionsinfo@gmail.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

/**
 * Dispatches inquiry and quotation data directly to gajananaconstructionsinfo@gmail.com
 * @param {Object} payload 
 * @returns {Promise<{success: boolean, message?: string}>}
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

    if (response.ok) {
      return { success: true, message: 'Delivered to gajananaconstructionsinfo@gmail.com', data: resJson };
    } else {
      console.warn('FormSubmit returned status:', response.status, resJson);
      return { success: false, message: resJson?.message || 'Dispatch error', data: resJson };
    }
  } catch (error) {
    console.error('Error in sendEmailNotification:', error);
    return { success: false, message: error.message };
  }
}
