/**
 * Parses the extracted text from the specification PDF into a structured object.
 */
export function parseProductSpecs(text) {
  if (!text) return null;

  const sections = {
    general: [],
    technical: [],
    packaging: [],
    container: []
  };

  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  let currentSection = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('General Information')) {
      currentSection = 'general';
      continue;
    } else if (line.includes('Technical Specifications')) {
      currentSection = 'technical';
      continue;
    } else if (line.includes('Packaging Details')) {
      currentSection = 'packaging';
      continue;
    } else if (line.includes('Container Loading Capacity')) {
      currentSection = 'container';
      continue;
    }

    if (!currentSection) continue;

    // Skip headers
    if (line.includes('Parameter') || line.includes('Packaging Type') || line.includes('Container Type') || line.includes('Details') || line.includes('Standard') || line.includes('Description') || line.includes('Approx. Quantity')) {
      continue;
    }

    // Handle key-value pairs
    // We try to find a separator (usually multiple spaces in the original text, but trim() removed them)
    // Actually, the original text had multiple spaces. Let's re-split without trim for better detection if possible,
    // or just assume the first few words are the key.
    
    // For general and technical, usually the first part is the key.
    if (currentSection === 'general' || currentSection === 'technical') {
      // Find the key/value. Since it was column-based, we look for large gaps.
      // But since we trimmed, we might have to use some heuristics.
      // Let's look at the original lines from the file again.
      
      // Wait, let's use the raw line from the text split.
    }
  }
  
  // Actually, a simpler way since the content is fairly consistent:
  const getPairs = (sectionTitle, nextSectionTitle) => {
    const startIdx = text.indexOf(sectionTitle);
    if (startIdx === -1) return [];
    
    const endIdx = nextSectionTitle ? text.indexOf(nextSectionTitle, startIdx) : text.length;
    const sectionText = text.substring(startIdx, endIdx);
    
    const pairs = [];
    const lines = sectionText.split('\n').filter(l => l.trim().length > 0);
    
    lines.forEach(line => {
      // Look for keys that we know exist
      const keys = [
        "Product Name", "HSN Code", "Quality Grade", "Origin",
        "Moisture Content", "Size", "Hot Water Insoluble", "Major Defects", "Total Ash", "Acid Insoluble Ash",
        "Standard Packing", "Custom Packing",
        "20 FT Container", "40 FT Container"
      ];
      
      for (const key of keys) {
        if (line.includes(key)) {
          let value = line.replace(key, "").trim();
          // Clean up leading dots or extra spaces
          value = value.replace(/^[\s.]+/, "").trim();
          if (value) {
            pairs.push({ label: key, value });
          }
          break;
        }
      }
    });
    return pairs;
  };

  return {
    general: getPairs("General Information", "Technical Specifications"),
    technical: getPairs("Technical Specifications", "Packaging Details"),
    packaging: getPairs("Packaging Details", "Container Loading Capacity"),
    container: getPairs("Container Loading Capacity", "Document created")
  };
}

export function findProductSpec(productName, extractedPages) {
  if (!extractedPages) return null;
  
  // Try to find the page that contains the product name
  // Normalizing names for better matching
  const normalizedSearch = productName.toLowerCase().replace(/dehydrated\s*/, "").trim();
  
  for (const page of extractedPages) {
    if (page.toLowerCase().includes(normalizedSearch)) {
      // Further check if it's a product spec page
      if (page.includes("Product Specifications")) {
        return parseProductSpecs(page);
      }
    }
  }
  return null;
}
