package lista11;

public class Poupanca extends ContaCorrente {
 
    public void renderJuros(double taxa) {

        double novoSaldo = (getSaldo() * taxa) + getSaldo();
        setSaldo(novoSaldo);
    }

}