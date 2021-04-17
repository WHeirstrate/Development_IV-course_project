package be.ehb.multec;

import be.ehb.multec.state.*;

import java.util.ArrayList;

public class Order {
    private double cost;
    private double time;
    private String description = "Your order contains: ";
    private State currentState = new NotOrderedState();

    Order(ArrayList<Fries> orderList) {
        int orderListLength = orderList.size();
        for (Fries order : orderList) {
            calculateVariables(order);
            if (orderListLength - 1 != 0)
                this.description += ", ";
            orderListLength--;
        }
    }

    private void sentToFryer() {
        try {
            Fryer.getInstance().fry(this);
        } catch (InterruptedException e) {
            System.out.println("Waiting process interrupted.");
        }
    }

    private void calculateVariables(Fries order) {
        if (order != null) {
            cost += Math.round(order.cost());
            time += Math.round(order.time());
            description += order.getDescription();
        } else {
            System.out.println(" ** Your order should not contain a nullified object.");
            this.description += "null";
        }
    }

    protected void setCurrentState(State newState) {
        this.currentState = newState;
    }

    public void startOrder() {
        setCurrentState(new WaitForCookingState());
        System.out.println(getCurrentState());
        printOrder();
        sentToFryer();
        setCurrentState(new DoneState());
        System.out.println(getCurrentState());
    }

    public void printOrder() {
        System.out.println(description
                + " and costs EUR"
                + cost
                + ". It will take "
                + time
                + " seconds to complete.");
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

    public State getCurrentState() {
        return currentState;
    }

    @Override
    public String toString() {
        return description
                + ".\n"
                + " ** To process your order, execute 'order.startOrder()'.";
    }
}