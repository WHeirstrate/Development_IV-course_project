package be.ehb.multec;

import be.ehb.multec.sauce.Ketchup;
import be.ehb.multec.sauce.Mayo;
import be.ehb.multec.sauce.Special;
import be.ehb.multec.size.Family;
import be.ehb.multec.size.Medium;
import be.ehb.multec.size.Small;
import be.ehb.multec.Order;
import be.ehb.multec.Fryer;
import org.junit.Assert;
import org.junit.Test;
import java.util.ArrayList;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class FryerTest {

    Fryer friteus1 = Fryer.getInstance();
    Fryer friteus2 = Fryer.getInstance();

    @Test
    public void friteuseTest() {
    assertEquals(friteus1, friteus2);
    }

}
