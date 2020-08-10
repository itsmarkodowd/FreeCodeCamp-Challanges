import pandas as pd


def calculate_demographic_data(print_data=True):
    # Read data from file
    df = pd.read_csv("adult.data.csv")

    # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
    race_count = df['race'].value_counts()

    # print('race', race_count)

    # What is the average age of men?

    average_age_men = round(df['age'][df['sex'] == 'Male'].mean(), 1)

    # print('avg', average_age_men)

    # What is the percentage of people who have a Bachelor's degree?
    percentage_bachelors = round((
        df['education'][df['education'] == 'Bachelors'].size / df['education'].size) * 100, 1)

    # print('percent', percentage_bachelors)

    # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
    # What percentage of people without advanced education make more than 50K?

    # with and without `Bachelors`, `Masters`, or `Doctorate`

    higher_education = df['education'][(df['education']
                                        == 'Bachelors') | (df['education']
                                                           == 'Masters') | (df['education']
                                                                            == 'Doctorate')]

    lower_education = df['education'][(df['education']
                                       != 'Bachelors') & (df['education']
                                                          != 'Masters') & (df['education']
                                                                           != 'Doctorate')]

    # print('higher_education', higher_education)
    # print('lower_education', lower_education)

    # percentage with salary >50K
    higher_education_rich = round(higher_education[df['salary']
                                                   == '>50K'].size / higher_education.size * 100, 1)

    lower_education_rich = round(lower_education[df['salary']
                                                 == '>50K'].size / lower_education.size * 100, 1)

    # print('higher_education_rich', higher_education_rich)
    # print('lower_education_rich', lower_education_rich)

    # What is the minimum number of hours a person works per week (hours-per-week feature)?
    min_work_hours = df['hours-per-week'].min()

    # print('min_work_hours', min_work_hours)

    # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
    num_min_workers = df[df['hours-per-week'] ==
                         min_work_hours]

    # print('num_min_workers', num_min_workers)

    rich_percentage = num_min_workers[num_min_workers['salary']
                                      == '>50K'].size / num_min_workers.size * 100

    # print('rich_percentage', rich_percentage)

    # What country has the highest percentage of people that earn >50K?

    country_percentage_rich = df.loc[(df.salary == '>50K')].groupby(
        by='native-country').size()/df.groupby(by='native-country').size()

    top_country = country_percentage_rich[country_percentage_rich.eq(
        country_percentage_rich.max())]

    highest_earning_country = top_country.index[0]

    # print('highest_earning_country\n', highest_earning_country)

    highest_earning_country_percentage = round(
        float(top_country.values[0]*100), 1)

    # print('highest_earning_country_percentage\n', highest_earning_country_percentage)

    # Identify the most popular occupation for those who earn >50K in India.
    top_IN_occupation = df[df['native-country']
                           == 'India'][df['salary'] == '>50K']['occupation'].mode()[0]

    # print('top_IN_occupation\n', top_IN_occupation)

    # DO NOT MODIFY BELOW THIS LINE

    if print_data:
        print("Number of each race:\n", race_count)
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(
            f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(
            f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(
            f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(
            f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }
