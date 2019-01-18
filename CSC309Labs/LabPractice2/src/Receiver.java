import java.util.ArrayList;
import java.util.List;

public class Receiver implements Subject {
    List<MyObserver> observerList = new ArrayList<>();
    Bundle bundle = new Bundle(new ArrayList<Object>());
    @Override
    public void registerapp(MyObserver myobserver){
        observerList.add(myobserver);
    }

    @Override
    public void removeapp(MyObserver myObserver) {
        observerList.remove(myObserver);
    }

    @Override
    public void notifyapp() {
        for (MyObserver o : observerList)
        {
            o.Update(bundle);
        }
    }
}
