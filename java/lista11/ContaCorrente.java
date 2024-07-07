package lista11;

public class ContaCorrente {

    private double saldo;
    private String numero;
    private Cliente cliente;

    public ContaCorrente() {

    }

    public ContaCorrente(double saldo, String numero, Cliente cliente) {

        this.saldo = saldo;
        this.numero = numero;
        this.cliente = cliente;
    }
    
    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void creditar(double valor) {

        this.saldo = this.saldo + valor;
    }

    public void debitar(double valor) {

        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
        }
    }

    public void imprimirDadosConta() {

        System.out.println("O cliente " 
                                + getCliente().getNome() 
                                + " da conta " 
                                + getNumero() 
                                + " tem o seguinte saldo: " 
                                + getSaldo());
    }
    
}