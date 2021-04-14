package be.ehb.multec;

import be.ehb.multec.sauce.Mayo;
import be.ehb.multec.size.Small;

public class FriesTest {

    public static void main(String[] args) {
        Fries kleineFrietmetMayo = new Mayo(new Small());
        System.out.println(kleineFrietmetMayo.getDescription());
        System.out.println(kleineFrietmetMayo.cost() + " euro");
        System.out.println(kleineFrietmetMayo.time() + " minuten");
    }
}
