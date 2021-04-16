package be.ehb.multec;

import be.ehb.multec.state.CookingState;

public class Fryer {
    private static final Fryer theOnlyFryerWeHave = new Fryer();

    public void fry(Order order) throws InterruptedException {
        order.setCurrentState(new CookingState());
        System.out.println(order.getCurrentState());
        Thread.sleep((long) order.getTime()*1000);
    }

    public static Fryer getInstance()
    {
        return theOnlyFryerWeHave;
    }
}
