package be.ehb.multec;

public class FriesTest {

    public static void main(String[] args) {
        Fries kleineFrietmetMayo = new Mayo(new Small());
        System.out.println(kleineFrietmetMayo.getDescription());
        System.out.println(kleineFrietmetMayo.cost() + " euro");
        System.out.println(kleineFrietmetMayo.time() + " minuten");
    }
}
