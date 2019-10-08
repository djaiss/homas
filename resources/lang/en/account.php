<?php

return [
    'home_title' => 'Administration of your Homas account',
    'home_role_administrator' => 'As an <span class="fw5 brush-blue">administrator</span>, you can…',
    'home_role_owner' => 'As an <span class="fw5 brush-orange">owner</span>, you can…',
    'home_manage_employees' => 'Add/remove existing employees',
    'home_manage_positions' => 'Add/remove job positions',
    'home_manage_teams' => 'Add/remove teams',
    'home_manage_flows' => 'Add/remove flows',
    'home_manage_employee_statuses' => 'Add/remove employee statuses',
    'home_company_news' => 'Add/remove company news',
    'home_audit_log' => 'View audit log to see who has done what',
    'home_generate_fake_data' => 'Populate account with fake data',
    'home_remove_fake_data' => 'Remove fake data',
    'home_manage_pto' => 'Manage paid time off policies',

    'employees_title' => 'All the employees in {company}',
    'employees_number_employees' => '{company} has one employee. | {company} has {count} employees.',
    'employees_cta' => 'Add an employee',
    'employees_lock_account' => 'Lock account',
    'employees_change_permission' => 'Change permission',

    'employee_new_basic_information' => 'Basic information',
    'employee_new_title' => 'Add an employee to {name}',
    'employee_new_firstname' => 'First name',
    'employee_new_lastname' => 'Last name',
    'employee_new_email' => 'Email address',
    'employee_new_permission_level' => 'Permissions',
    'employee_new_administrator' => 'Administrator',
    'employee_new_hr' => 'Human Resource Representative',
    'employee_new_user' => 'Employee',
    'employee_new_administrator_desc' => 'Can do everything, including account management.',
    'employee_new_hr_desc' => 'Have access to most features, including reading and writing private information, but can\'t manage the account itself.',
    'employee_new_user_desc' => 'Can see all teams and employees, but can not manage the account or read private information.',
    'employee_new_send_email' => 'Send an email to this person with a link to setup the account.',
    'employee_new_send_email_optional' => 'This is optional - you will be able to invite this person later.',

    'teams_title' => 'All the teams listed in {company}',
    'teams_number_teams' => '{company} has one team. | {company} has {count} teams.',
    'teams_cta' => 'Add a team',
    'teams_blank' => 'Teams are a great way for groups of people in your company to work together in Homas.',
    'team_new_name' => 'Name of the team',

    'employee_statuses_title' => 'All the employee statuses in {company}',
    'employee_statuses_number_positions' => '{company} has one employee status. | {company} has {count} employee statuses.',
    'employee_statuses_cta' => 'Add an employee status',
    'employee_statuses_blank' => 'Statuses are terms that describe the employment status of an employee. Like full-time, part-time, etc....',
    'employee_statuses_new_title' => 'Status name',
    'employee_statuses_placeholder' => 'Full-time',
    'employee_statuses_success_new' => 'The employee status has been created',
    'employee_statuses_success_update' => 'The employee status has been updated',
    'employee_statuses_success_destroy' => 'The employee status has been destroyed',

    'positions_title' => 'All the positions used in {company}',
    'positions_number_positions' => '{company} has one position. | {company} has {count} positions.',
    'positions_cta' => 'Add a position',
    'positions_blank' => 'Positions are terms that describe in a few words what an employee does. Like Marketing Coordinator for example.',
    'position_new_title' => 'Position name',
    'position_success_new' => 'The position has been created',
    'position_success_update' => 'The position has been updated',
    'position_success_destroy' => 'The position has been destroyed',

    'flows_title' => 'All the flows in {company}',
    'flows_cta' => 'Create a flow',
    'flows_number_flows' => '{company} has one flow. | {company} has {count} flows.',
    'flows_blank' => 'Flows lets you define how the system should react when something in the company happens. It’s... quite powerful.',
    'flow_new_flow' => 'What is the name of the flow?',
    'flow_new_help' => 'This is an internal name, only used to identify the flow.',
    'flow_new_days' => 'days',
    'flow_new_weeks' => 'weeks',
    'flow_new_months' => 'months',
    'flow_new_before' => 'before',
    'flow_new_after' => 'after',
    'flow_new_type_employee_joins_company' => 'An employee joins the company',
    'flow_new_type_employee_leaves_company' => 'An employee leaves the company',
    'flow_new_type_employee_birthday' => 'An employee has a birthday',
    'flow_new_type_employee_joins_team' => 'An employee is added to a team',
    'flow_new_type_employee_leaves_team' => 'An employee is removed from a team',
    'flow_new_type_employee_becomes_manager' => 'An employee becomes a manager',
    'flow_new_type_employee_new_position' => 'An employee has a new position',
    'flow_new_type_employee_leaves_holidays' => 'An employee leaves for holidays',
    'flow_new_type_employee_returns_holidays' => 'An employee comes back from holidays',
    'flow_new_type_employee_returns_leave' => 'An employee returns from a leave',
    'flow_new_the_day_event_happens' => 'The moment this event happens',
    'flow_new_action_following' => 'Do the following',
    'flow_new_action_notification' => 'Notify an employee',
    'flow_new_action_task' => 'Add a task',
    'flow_new_action_email' => 'Send an email',
    'flow_new_action_notification_actual_employee' => 'The actual employee',
    'flow_new_action_notification_specific_employee' => 'A specific employee',
    'flow_new_action_notification_manager' => 'The employee’s manager(s)',
    'flow_new_action_notification_report' => 'The employee’s direct report(s)',
    'flow_new_action_notification_team_members' => 'All the employee’s teams members',
    'flow_new_action_notification_specific_team' => 'A specific team',
    'flow_new_action_notification_everyone' => 'Everyone in the company',
    'flow_new_action_notification_confirmation' => 'Are you sure? This will alert all the employees of the company.',
    'flow_new_action_notification_search_employees' => 'Search an employee',
    'flow_new_action_notification_search_hint' => 'Type the first letters of the name',
    'flow_new_action_notification_search_teams' => 'Search a team',
    'flow_new_action_remove' => 'Remove action',
    'flow_new_action_label_actual_employee' => 'the actual employee',
    'flow_new_action_label_everyone' => 'everyone in the company',
    'flow_new_action_label_managers' => 'the manager(s) of the employee',
    'flow_new_action_label_reports' => 'the direct report(s) of the employee',
    'flow_new_action_label_team_employee' => 'the team of the employee',
    'flow_new_action_label_employee' => 'an employee',
    'flow_new_action_label_unknown_message' => 'an unknown message',

    'log_account_created' => 'Created the account.',
    'log_employee_added_to_company' => 'Added :employee as an employee.',
    'log_team_created' => 'Created the team called :name.',
    'log_employee_added_to_team' => 'Added :employee to :team.',
    'log_employee_removed_from_team' => 'Removed :employee from :team.',
    'log_employee_updated' => 'Updated information about :employee.',
    'log_employee_updated_hiring_information' => 'Updated hiring about :employee.',
    'log_manager_assigned' => 'Assigned :name as the manager of :employee.',
    'log_manager_unassigned' => 'Removed :name as the manager of :employee.',
    'log_employee_invited_to_become_user' => 'Sent an invitation to :employee to join the company.',
    'log_position_created' => 'Created a position called :name.',
    'log_position_updated' => 'Updated the position formely called :former_name to :new_name.',
    'log_position_destroyed' => 'Destroyed the position called :name.',
    'log_position_assigned' => 'Assigned the position called :name to :employee.',
    'log_position_removed' => 'Removed the position called :name to :employee.',
    'log_flow_created' => 'Created the flow called :name.',
    'log_employee_worklog_logged' => 'Added a worklog.',
    'log_employee_status_created' => 'Added an employee status called :name.',
    'log_employee_status_updated' => 'Updated the name of the employee status from :former_name to :new_name.',
    'log_employee_status_destroyed' => 'Destroyed the employee status called :name.',
    'log_employee_status_assigned' => 'Assigned the employee status called :name to :employee.',
    'log_employee_status_removed' => 'Removed the employee status called :name from :employee.',
    'log_company_news_created' => 'Wrote a company news called :name.',
    'log_company_news_updated' => 'Updated the news called :name.',
    'log_company_news_destroyed' => 'Destroyed the news called :name.',
    'log_employee_morale_logged' => 'Added an emotion on how the day went.',
    'log_company_pto_policy_created' => 'Created a company PTO policy for :year.',
    'log_company_pto_policy_updated' => 'Updated the company PTO policy for the year :year.',

    'employee_log_employee_created' => 'Created this employee entry.',
    'employee_log_manager_assigned' => 'Assigned :name as a manager.',
    'employee_log_direct_report_assigned' => 'Assigned :name as a direct report.',
    'employee_log_manager_unassigned' => 'Removed :name as a manager.',
    'employee_log_direct_report_unassigned' => 'Removed :name as a direct report.',
    'employee_log_position_assigned' => 'Assigned the position called :name.',
    'employee_log_position_removed' => 'Removed the position called :name.',
    'employee_log_employee_added_to_team' => 'Added to the team called :name.',
    'employee_log_employee_removed_from_team' => 'Removed from the team called :name.',
    'employee_log_employee_worklog_logged' => 'Added a worklog.',
    'employee_log_employee_status_assigned' => 'Assigned the employee status called :name.',
    'employee_log_employee_status_removed' => 'Removed the employee status called :name.',
    'employee_log_morale_logged' => 'Added an emotion on how the day went.',

    'team_log_team_created' => 'Created the team.',
    'team_log_team_updated' => 'Changed the name from :old_name to :new_name.',
    'team_log_employee_added_to_team' => 'Added :employee_name to the team.',
    'team_log_employee_removed_from_team' => 'Removed :employee_name from the team.',
    'team_log_task_associated_to_team' => 'Associated :name to the team.',
    'team_log_team_leader_assigned' => 'Assigned :name as the team leader.',
    'team_log_team_leader_removed' => 'Removed :name as the team leader.',

    'notification_dummy_data_generated' => 'Dummy data have been generated for :name.',

    'morale_1' => 'Positive',
    'morale_2' => 'Neutral',
    'morale_3' => 'Negative',

    'company_news_title' => 'Company news',
    'company_news_blank' => 'Do you need to broadcast an announcement or a news to every employee of Behaviour? You can do so here!',
    'company_news_number_news' => '{company} has {count} company news.',
    'company_news_cta' => 'Add a company news',
    'company_news_written_by' => 'Written by {name} on {date}',
    'company_news_success_destroy' => 'The company news has been deleted with success.',
    'company_news_new_headline' => 'Add a company news',
    'company_news_new_title' => 'Title of the news',
    'company_news_new_title_help' => 'Keep it short, interesting. Also, add an emoji.',
    'company_news_new_content' => 'Write something interesting',
    'company_news_new_content_help' => 'Everyone in the company will be able to read this news. Make sure you are not saying something silly.',
    'company_news_edit_headline' => 'Edit a company news',

    'pto_policies_edit_title_1' => 'As software makers, we think it’s our responsability to promote a culture where employees are actually trusted and autonomous.',
    'pto_policies_edit_title_2' => 'We have a very limited set of features around Paid Time Offs (a barbaric name that refers to the holidays employees are allowed to take each year). On purpose. Click here to read more about our way of thinking.',
    'pto_policies_edit_title_3' => 'The only setting we need to know is the amount of working days each year has, so we can calculate how much holidays the employees gain each day.',
    'pto_policies_edit_title_4' => 'You just need to make sure that for each one of those years below, the amount of days actually worked is correct for your country.',
    'pto_policies_edit_title' => 'All {name} Paid Time Off policies',
    'pto_policies_edit_year' => 'In {year}...',
    'pto_policies_stat_worked_days' => 'worked days',
    'pto_policies_stat_default_holidays' => 'default amount of holidays per employee',
    'pto_policies_stat_default_sick_days' => 'default amount of sick days',
    'pto_policies_stat_default_ptos' => 'default amount of PTOs',
    'pto_policies_stat_days' => '{number} days',
    'pto_policies_edit_default_employee_settings' => 'Default settings for new employees',
    'pto_policies_edit_default_amount_of_allowed_holidays' => 'Allowed holidays per year',
    'pto_policies_edit_default_amount_of_sick_days' => 'Allowed sick days per year',
    'pto_policies_edit_default_amount_of_pto_days' => 'Allowed personal days per year',
    'pto_policies_edit_click_calendar' => 'Add/remove holidays by clicking in a day in the calendar below',
    'pto_policies_edit_calendar_help' => 'Note: we\'ll recalculate the balance of holidays for all your employees based any changes you would do here.',
    'pto_policies_month' => 'Month',
    'pto_policies_legend' => 'Legend:',
    'pto_policies_legend_weekend' => 'Weekend',
    'pto_policies_legend_holiday' => 'Holiday',
    'pto_policies_legend_' => 'Add/remove holidays by clicking in a day in the calendar below',
    'pto_policies_edit_total' => 'Employees will have to work a total of {totalWorkedDays} in {year}.',
];
