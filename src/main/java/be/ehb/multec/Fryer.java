package be.ehb.multec;

import be.ehb.multec.state.CookingState;

public class Fryer {
    private static final Fryer theOnlyFryerWeHave = new Fryer();

    public boolean fry(Order order){
        System.out.println(order.printOrder());
        order.setCurrentState(new CookingState());
        System.out.println(order.getCurrentState());
        System.out.println("FRYER TIMEOUT");
        //timeout(order.getTime() in seconden)
        return true;
    }

    public static Fryer getInstance()
    {
        return theOnlyFryerWeHave;
    }
}
