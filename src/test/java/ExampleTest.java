import org.junit.Test;

import static org.junit.Assert.*;

public class ExampleTest {

    @Test
    public void getSum() {
        Example ex = new Example(4, 65);
        assertEquals(ex.getSum(), 69);
    }
}