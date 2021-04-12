package be.ehb.multec;

public class Family extends Fries {
    public Family() {
        setDescription("Family fries");
    }

    @Override
    protected double cost() {
        return 5.10;
    }

    @Override
    protected double time() {
        return 3;
    }
}
