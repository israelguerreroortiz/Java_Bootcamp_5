package sheet01;

import  java.util.Scanner;

public class OperacionesAritmeticas {
    void main()
    {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese el primer número: ");
        int num1 = scanner.nextInt();
        System.out.print("Ingrese el segundo número: ");
        int num2 = scanner.nextInt();
        scanner.close();
        System.out.println("Suma: " + (num1 + num2));
        System.out.println("Resta: " + (num1 - num2));
        System.out.println("Multiplicación: " + (num1 * num2));
        if (num2 != 0) {
            System.out.println("División: " + (num1 / num2));
        } else {
            System.out.println("Error: División por cero.");
        }
        System.out.println("Fin del programa.");
    }
}
