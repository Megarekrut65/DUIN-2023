from datetime import timedelta


def get_week_days(specific_date):
    """
        Returns days in week that specific_date is in
    """
    start_of_week = specific_date - timedelta(days=specific_date.weekday())

    return [start_of_week + timedelta(days=i) for i in range(7)]


def get_time_range(start, end, time_format="%H:%M"):
    start_time_str = start.strftime(time_format)
    end_time_str = end.strftime(time_format)

    return f"{start_time_str}-{end_time_str}"
