package be.ehb.multec;

public class Special extends SauceDecorator {
    public Special(Fries fries) {
        super(fries);
        super.setDescription(", special");
    }

    @Override
    protected double cost() {
        return super.cost() + 1.50;
    }

    @Override
    protected double time() { return super.time() + 2; }

    @Override
    public String getDescription() {
        return super.fries.getDescription() + super.getDescription();
    }
}
