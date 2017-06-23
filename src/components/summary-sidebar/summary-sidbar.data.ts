export class SideBarData {
    week: WeekData[];
    dates: Dates [];
}
class Dates {
    date: String;
    start_time: String;
    end_time: String;
    hours_completed: String;
    status_flag: String;
    start_edit_flag: boolean;
    end_edit_flag: boolean;
    week_no: number;
    error : String;
}

class WeekData {
    week_name: String;
    is_current: boolean;
    is_previous: boolean;
    week_no: number;
    week_range: WeekRange;

}

class WeekRange {
    start_date: String;
    end_date: String;
}

