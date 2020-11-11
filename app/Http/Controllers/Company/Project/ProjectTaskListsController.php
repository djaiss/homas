<?php

namespace App\Http\Controllers\Company\Project;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Models\Company\Project;
use Illuminate\Http\JsonResponse;
use App\Helpers\NotificationHelper;
use App\Http\Controllers\Controller;
use App\Http\ViewHelpers\Project\ProjectViewHelper;
use App\Services\Company\Project\CreateProjectTaskList;
use App\Http\ViewHelpers\Project\ProjectTasksViewHelper;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProjectTaskListsController extends Controller
{
    /**
     * Display the Create task list view.
     *
     * @param Request $request
     * @param int $companyId
     * @param int $projectId
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|Response
     */
    public function create(Request $request, int $companyId, int $projectId)
    {
        $company = InstanceHelper::getLoggedCompany();

        try {
            $project = Project::where('company_id', $company->id)
                ->with('employees')
                ->findOrFail($projectId);
        } catch (ModelNotFoundException $e) {
            return redirect('home');
        }

        return Inertia::render('Project/Messages/Create', [
            'project' => ProjectViewHelper::info($project),
            'notifications' => NotificationHelper::getNotifications(InstanceHelper::getLoggedEmployee()),
        ]);
    }

    /**
     * Create the task list.
     *
     * @param Request $request
     * @param int $companyId
     * @param int $projectId
     * @return JsonResponse
     */
    public function store(Request $request, int $companyId, int $projectId): JsonResponse
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();
        $company = InstanceHelper::getLoggedCompany();

        $data = [
            'company_id' => $company->id,
            'author_id' => $loggedEmployee->id,
            'project_id' => $projectId,
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ];

        $taskList = (new CreateProjectTaskList)->execute($data);

        return response()->json([
            'data' => ProjectTasksViewHelper::getTaskListInfo($taskList),
        ], 201);
    }
}
