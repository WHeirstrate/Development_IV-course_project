package be.ehb.multec;

import java.util.ArrayList;

public class Order {
    private double cost;
    private double time;
    private String description = "Your order contains: ";

    Order(ArrayList<Fries> orderList) {
        int orderListLength = orderList.size();
        for (Fries order : orderList) {
            calculateVariables(order);
            if (orderList.lastIndexOf(order) != orderListLength - 1)
                this.description += ", ";
        }
    }

    private void calculateVariables(Fries order){
        if (order != null) {
            cost += Math.round(order.cost());
            time += Math.round(order.time());
            description += order.getDescription();
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

    public double getTime() {
        return time;
    }

    @Override
    public String toString() {
        return description
                + " and costs EUR"
                + cost
                + ". It will take "
                + time
                + " minutes to complete. Enjoy!";
    }
}
