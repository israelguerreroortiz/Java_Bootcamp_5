package sheet01;
import java.util.Scanner;

public class Condiciones {
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese un número entero: ");
        int number = scanner.nextInt();
        if (number == 0) {
            System.out.println("El número es 0");
        } else if (number > 0) {
            System.out.println("Es positivo");
        } else {
            System.out.println("Es negativo");
        }
        scanner.close();
    }
}
