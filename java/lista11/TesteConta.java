package lista11;

public class TesteConta {
    
    public static void main(String[] args) {
        
        Cliente cliente1 = new Cliente();
        cliente1.setNome("João");
        cliente1.setCpf("123.123.123-12");

        ContaCorrente cc = new ContaCorrente();
        cc.setNumero("14231-2");
        cc.setCliente(cliente1);
        cc.setSaldo(1000);

        cc.imprimirDadosConta();

        cc.creditar(200);
        cc.imprimirDadosConta();

        cc.debitar(50);
        cc.imprimirDadosConta();

        Poupanca p = new Poupanca();
        p.setNumero("69283-2");
        p.setCliente(cliente1);
        p.setSaldo(400);

        p.imprimirDadosConta();

        p.creditar(400);
        p.debitar(100);
        p.imprimirDadosConta();
 
        p.renderJuros(0.50);
        p.imprimirDadosConta();
    }
}
