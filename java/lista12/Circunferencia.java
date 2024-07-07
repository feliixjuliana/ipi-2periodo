package lista12;

public class Circunferencia extends FormaGeometrica {

    private double raio;

    public double getRaio() {
        return raio;
    }

    public void setRaio(double raio) {
        this.raio = raio;
    }

    public double area() {

        return 2 * Math.PI * raio;
    }

}
