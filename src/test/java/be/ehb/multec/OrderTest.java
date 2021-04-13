package be.ehb.multec;

import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class OrderTest {

    @Test
    public void getCost() {
        ArrayList<Fries> orderList = new ArrayList<>();

        Fries order1 = new Mayo(new Medium());
        Fries order2 = new Special(new Medium());

        orderList.add(order1);
        orderList.add(order2);

        Order order = new Order(orderList);
        System.out.println(order.getCost());
        System.out.println(order.getDescription());
    }
}