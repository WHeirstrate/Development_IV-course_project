package be.ehb.multec;

public class Ketchup extends SauceDecorator {
    public Ketchup(Fries fries) {
        super(fries);
        super.setDescription(", ketchup");
    }

    @Override
    protected double cost() {
        return super.cost() + 0.70;
    }

    @Override
    protected double time() {
        return super.time() + 1;
    }

    @Override
    public String getDescription() {
        return super.fries.getDescription() + super.getDescription();
    }
}
