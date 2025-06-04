package sheet02;
import sheet02.Imprimible;
import sheet02.Direccion;

public class Persona {
    private String nombre;
    private int edad;
    private Direccion direccion;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    public void setDireccion(Direccion direccion){
        this.direccion = direccion;
    }

    public Direccion getDireccion(){
        return direccion;
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + getNombre() + " Edad: " + getEdad());
    }

    public static void main() {
        Direccion direccion = new Direccion("Posada N18", "Málaga", "29312");
        Persona persona1 = new Persona("Juan", 25);
        persona1.mostrarDetalles();
        persona1.setNombre("Carlos");
        persona1.setEdad(30);
        persona1.setDireccion(direccion);
        Direccion getDireccion = persona1.getDireccion();
        persona1.mostrarDetalles();
        System.out.println(getDireccion);
    }
}

class Estudiante extends Persona implements Imprimible{
    private String grado;

    public Estudiante(String nombre, int edad, String grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getGrado() {
        return grado;
    }

    @Override
    public void mostrarDetalles() {
        System.out.println("Nombre: " + getNombre() + " Edad: " + getEdad() + " Grado: " + getGrado());
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo a el estudiante...");
        mostrarDetalles();
    }

    public static void main(String[] args) {
        Estudiante estudiante1 = new Estudiante("Ana", 20, "Ingenería");
        estudiante1.setEdad(50);
        estudiante1.imprimir();
    }
}

class Empleado extends Persona implements Imprimible{

    private double salario;
    static int contadorEmpleados = 0;

    public Empleado(String nombre, int edad, int salario) {
        super(nombre, edad);
        this.salario = salario;
        contadorEmpleados++;
        System.out.println("ContadorEmpleados: " + contadorEmpleados);
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public double getSalario() {
        return salario;
    }

    @Override
    public void mostrarDetalles() {
        System.out.println("Nombre: " + getNombre() + " Edad: " + getEdad() + " Salario: " + getSalario());
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo a el empleado...");
        mostrarDetalles();
    }

    public static void main(String[] args) {
        Persona[] personas = {
                new Estudiante("Ana", 20, "Ingeniería"),
                new Empleado("Luis", 30, 50000),
                new Persona("Marta", 40),
                new Empleado("Manuel", 40, 5000)
        };
        // Recorre el array para mostrar los detalles de los objetos y hacer uso del
        // polimorfismo
        for (int i = 0; i < personas.length; i++) {
            personas[i].mostrarDetalles();
        }
    }
}

class Utilidades {
    public static boolean EsMayorDeEdad(Persona p) {
        int edad = p.getEdad();
        if (edad >= 18)
            return true;
        else
            return false;
    }
    public static void main(String[] args){
        Persona persona = new Persona("Javier", 17);
        System.out.println(Utilidades.EsMayorDeEdad(persona));
    }
}


