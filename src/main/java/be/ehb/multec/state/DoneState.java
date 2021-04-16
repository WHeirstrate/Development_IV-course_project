package be.ehb.multec.state;

import javax.naming.Context;

public class DoneState implements State {
    @Override
    public void doAction(Context context) {
        System.out.println("Cooking is done! Enjoy!");
    }

    @Override
    public String toString() {
        return "Done, enjoy!";
    }
}
