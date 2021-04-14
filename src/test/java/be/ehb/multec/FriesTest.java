package be.ehb.multec;

import be.ehb.multec.sauce.Ketchup;
import be.ehb.multec.sauce.Mayo;
import be.ehb.multec.sauce.Special;
import be.ehb.multec.size.Family;
import be.ehb.multec.size.Medium;
import be.ehb.multec.size.Small;

public class FriesTest {

    public static void main(String[] args) {
    Fries fries = new Mayo(new Medium());
    System.out.println(fries.getDescription());
    }
}
