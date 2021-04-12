package be.ehb.multec;

public class Small extends Fries {
    public Small() {
        setDescription("small fries");
    }

    @Override
    protected double cost() {
        return 2.10;
    }

    @Override
    protected double time() {
        return 3;
    }
}
