package be.ehb.multec;

import java.util.ArrayList;

import static java.lang.System.err;

public class Order {
    private double cost;
    private String description = "Your order contains: ";

    Order(ArrayList<Fries> orderList) {
        int orderListLength = orderList.size();
        for (Fries order : orderList) {
            calculateCostAndDescription(order);
            if (orderList.lastIndexOf(order) != orderListLength - 1)
                this.description += ", ";
        }
    }

    private void calculateCostAndDescription(Fries order){
        if (order != null) {
            this.cost += Math.round(order.cost());
            this.description += order.getDescription();
        } else {
            System.out.println(" ** Your order should not contain a nullified object.");
            this.description += "null";
        }
    }

    public double getCost() {
        return cost;
    }

    public String getDescription() {
        return description;
    }
}
