import { useEffect } from "react";

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    // Salva estado anterior
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") || "";

    document.title = title;

    if (description) {
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }

    // Cleanup: restaura quando o componente for desmontado (o usuário sair da página)
    return () => {
      document.title = previousTitle;
      if (description && metaDescription) {
        metaDescription.setAttribute("content", previousDescription);
      } else if (description && !metaDescription) {
        const addedMeta = document.querySelector('meta[name="description"]');
        if (addedMeta) document.head.removeChild(addedMeta);
      }
    };
  }, [title, description]);
}

export default useSEO;
