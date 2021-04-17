package be.ehb.multec;

import be.ehb.multec.sauce.Ketchup;
import be.ehb.multec.sauce.Mayo;
import be.ehb.multec.sauce.Special;
import be.ehb.multec.size.Family;
import be.ehb.multec.size.Medium;
import be.ehb.multec.size.Small;
import org.junit.Assert;
import org.junit.Test;
import java.util.ArrayList;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class FriesTest {

    @Test
    public void friesTest() {
        Fries fries = new Mayo(new Special(new Medium()));
        System.out.println(fries.getDescription());
    }

}
