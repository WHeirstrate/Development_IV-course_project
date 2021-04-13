package be.ehb.multec;

import java.util.ArrayList;

public class Order{
    private double cost;
    private String description = "Uw order bevat: ";

    Order(ArrayList<Fries> orderList) {
        for (Fries order : orderList) {
            this.cost += Math.round(order.cost());
            this.description += order.description;
        }
    }

    public double getCost(){
        return cost;
    }

    public String getDescription(){
        return description;
    }
}
