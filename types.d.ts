// types.d.ts ou un fichier de déclarations de type global dans votre projet
interface ImportMetaEnv {
    VITE_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }