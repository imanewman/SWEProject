public abstract class RecFilter {
  public RecFilter() {}

  public abstract List<Rec> filter(List<Rec> recList);

  protected List<Rec> filterBy(List<Rec> recList, (Rec rec) -> (Boolean) filterPredicate) {
    ArrayList<Rec> filteredList = ArrayList<Rec>();

    for (Rec r : recList) {
      if (filterPredicate(rec)) {
        filteredList.add(rec);
      }
    }

    return filteredList;
  }
}

public class TagFilter extends RecFilter{
  private ArrayList<String> tagList = ArrayList<String>();

  public TagFilter(List<String> tagList) {
    this.tagList = tagList;
  }

  @Override
  public List<Rec> filter(List<Rec> recList) {
    return filterBy(recList, tagFilter);
  }

  private Boolean tagFilter(Rec rec) {
    for (String tag : tagList) {
      if (rec.tagList().indexOf(tag) != -1) {
        return true;
      }
    }

    return false;
  }
}
