import java.io.File;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Usage: java Main <parentFolder> <folderName> <fileName1> <fileName2> ...");
            return;
        }
        // Dans le cas où il a mis qqch
        String parentFolderName = args[0];
        File parentFolder = new File(parentFolderName);
        if (!parentFolder.exists() || !parentFolder.isDirectory()) {
            System.out.println("Le dossier parent spécifié n'existe pas ou n'est pas un dossier valide.");
            return;
        }

        // si dossier parent valide 
        String folderName = args[1];
        File folder = new File(parentFolder.getAbsolutePath() + File.separator + folderName);

        if (!folder.exists()) {
            boolean created = folder.mkdirs();
            if (!created) {
                System.out.println("Impossible de créer le dossier : " + folder.getAbsolutePath());
            } else {
                System.out.println("Dossier créé : " + folder.getAbsolutePath());
            }
        } else {
            System.out.println("Le dossier existe déjà : " + folder.getAbsolutePath());
        }

         // Création des fichiers
         for (int i = 2; i < args.length; i++) {
            String fileName = args[i];
            File file = new File(folder, fileName);
            try {
                if (file.createNewFile()) {
                    System.out.println("Fichier créé : " + file.getAbsolutePath());
                } else {
                    System.out.println("Le fichier existe déjà : " + file.getAbsolutePath());
                }
            } catch (IOException e) {
                System.out.println("Erreur lors de la création du fichier : " + fileName);
                e.printStackTrace();
            }
        }
        
    }
}