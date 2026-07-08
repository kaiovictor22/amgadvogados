import { useEffect } from "react";

export function useSEO(title: string, description?: string, canonicalUrl?: string) {
  useEffect(() => {
    // Salva estado anterior
    const previousTitle = document.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const previousOgTitle = ogTitle?.getAttribute("content") || "";
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const previousTwitterTitle = twitterTitle?.getAttribute("content") || "";

    const ogDescription = document.querySelector('meta[property="og:description"]');
    const previousOgDescription = ogDescription?.getAttribute("content") || "";

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const previousTwitterDescription = twitterDescription?.getAttribute("content") || "";

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute("href") || "";

    // Define novos valores
    document.title = title;
    
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    if (description) {
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }

      if (ogDescription) {
        ogDescription.setAttribute("content", description);
      }
      if (twitterDescription) {
        twitterDescription.setAttribute("content", description);
      }
    }

    if (canonicalUrl && canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    // Cleanup: restaura quando o componente for desmontado (o usuário sair da página)
    return () => {
      document.title = previousTitle;
      
      if (ogTitle) ogTitle.setAttribute("content", previousOgTitle);
      if (twitterTitle) twitterTitle.setAttribute("content", previousTwitterTitle);

      if (description) {
        if (metaDescription) {
          metaDescription.setAttribute("content", previousDescription);
        } else {
          const addedMeta = document.querySelector('meta[name="description"]');
          if (addedMeta) document.head.removeChild(addedMeta);
        }

        if (ogDescription) ogDescription.setAttribute("content", previousOgDescription);
        if (twitterDescription) twitterDescription.setAttribute("content", previousTwitterDescription);
      }

      if (canonicalUrl && canonicalLink) {
        canonicalLink.setAttribute("href", previousCanonical);
      }
    };
  }, [title, description, canonicalUrl]);
}

export default useSEO;
