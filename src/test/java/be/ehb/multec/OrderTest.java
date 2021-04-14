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

public class OrderTest {
    ArrayList<Fries> orderList = new ArrayList<>();
    Fries order1 = new Special(new Family());
    Fries order2 = new Mayo(new Medium());
    Fries order3 = new Ketchup(new Small());

 @Test
    public void getCost() {
        orderList.add(null);
        orderList.add(order2);
        
        Order order = new Order(orderList);
        assertEquals(4.0, order.getCost());
    }

    @Test
    public void getDescription(){
        orderList.add(order1);
        orderList.add(order3);
        Order order = new Order(orderList);
        System.out.println(order.getDescription());
    }
}