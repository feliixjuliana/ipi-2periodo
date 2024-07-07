package lista12;

public class Teste {
    
    public static void main(String[] args) {
        
        Retangulo r = new Retangulo();
        r.setBase(10);
        r.setAltura(2);
        System.out.println(r.area());

        Circunferencia c = new Circunferencia();
        c.setRaio(10);
        
        double area = c.area();
        System.out.printf("%.2f", area);
    }
}
