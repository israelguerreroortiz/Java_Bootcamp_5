package sheet01;
import java.util.Scanner;

public class Palindromo {
    void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese una cadena: ");
        String cadena = scanner.nextLine().toLowerCase().replace(" ", "");
        scanner.close();
        String esPalindromo = cadena;
        int i = 0;
        int len = cadena.length();
        int j = len - 1;
        int result = 0;
        while (i < len || j >= 0)
        {
            if (cadena.charAt(i) != esPalindromo.charAt(j))
            {
                System.out.println("No es palindromo");
                result++;
                break;
            }
            i++;
            j--;
        }
        if (result == 0)
        System.out.println("Es palindromo");
    }
}
