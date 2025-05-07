package sheet02;

public class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public String getNombre()
    {
        return nombre;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }

    public int getEdad()
    {
        return edad;
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + nombre + " Edad: " + edad);
    }

    public static void main() {
        Persona persona1 = new Persona("Juan", 25);
        persona1.mostrarDetalles();
        persona1.setNombre("Carlos");
        persona1.setEdad(30);
        String nombre = persona1.getNombre();
        int edad = persona1.getEdad();
        System.out.println("Nombre: " + nombre + " Edad: " + edad);

        Estudiante estudiante1 = new Estudiante("Luis", 20, "Matemáticas");
    }
}

class Estudiante extends Persona {
    private String grado;
    
    public Estudiante(String nombre, int edad, String grado) {
        super(nombre, edad);
        this.grado = grado;
    }
}

