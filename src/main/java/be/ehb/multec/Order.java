package be.ehb.multec;

import be.ehb.multec.state.CookingState;
import be.ehb.multec.state.DoneState;
import be.ehb.multec.state.State;
import be.ehb.multec.state.WaitForCookingState;

import java.util.ArrayList;

public class Order {
    private double cost;
    private double time;
    private String description = "Your order contains: ";
    private State currentState = new WaitForCookingState();

    Order(ArrayList<Fries> orderList) { //SRP
        int orderListLength = orderList.size();
        for (Fries order : orderList) {
            calculateVariables(order);
            if (orderList.lastIndexOf(order) != orderListLength - 1)
                this.description += ", ";
        }
        System.out.println(currentState);
        sentToFryer();
        setCurrentState(new DoneState());
        System.out.println(currentState);
    }

    private void sentToFryer() {
        System.out.println("SENT TO FRYER");
        Fryer.getInstance().fry(this);
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

    public String printOrder() {
        return description
                + " and costs EUR"
                + cost
                + ". It will take "
                + time
                + " minutes to complete.";
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
        return description;
    }
}
