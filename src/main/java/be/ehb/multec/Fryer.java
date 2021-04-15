package be.ehb.multec;

public class Fryer {
    private static final Fryer theOnlyFryerWeHave = new Fryer();

    private Fryer() {
    }

    public static Fryer getInstance()
    {
        return theOnlyFryerWeHave;
    }
}
