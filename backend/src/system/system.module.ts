import {Module} from "@nestjs/common";
import {UserController} from "./controller/user.controller";
import {UserService} from "./service/user.service";
import {DictController} from "./controller/dict.controller";
import {DictService} from "./service/dict.service";
import {DeptController} from "./controller/dept.controller";
import {DeptService} from "./service/dept.service";
import {SysAppService} from "./service/sysApp.service";
import {AppController} from "./controller/app.controller";
import {TeamService} from "./service/team.service";
import {UserDeptController} from "./controller/user.dept.controller";
import {FormController} from "./controller/form.controller";
import {FormService} from "./service/form.service";
import {ProcedureController} from "./controller/procedure.controller";
import {ProcedureService} from "./service/procedure.service";
import {FileController} from "./controller/file.controller";
import {FileService} from "./service/file.service";
import {FormTodoController} from "./controller/form.todo.controller";
import {FormTodoService} from "./service/form.todo.service";
import {FormDataController} from "./controller/form.data.controller";
import {FormDataService} from "./service/form.data.service";
import {AuthModule} from "../auth/auth.module";
import {FormLogController} from "./controller/form.log.controller";
import {FormCommentController} from "./controller/form.comment.controller";
import {XlsxService} from "./service/xlsx.service";
import {RoleController} from "./controller/role.controller";
import {RoleService} from "./service/role.service";
import {TestController} from "./controller/test.controller";
import {PdfService} from "./service/pdf.service";
import {FormPermissionController} from "./controller/form.permission.controller";
import {FormPermissionService} from "./service/form.permission.service";


@Module({
    controllers: [UserController, DictController, UserDeptController, DeptController, FormController,
        ProcedureController, FileController, FormTodoController, FormDataController, FormLogController, FormCommentController,
        RoleController, TestController, FormPermissionController],
    providers: [UserService, DictService, DeptService, SysAppService, TeamService, FormService, ProcedureService,
        FileService, FormTodoService, FormDataService, XlsxService, RoleService, PdfService, FormPermissionService]
    , imports: [AuthModule]
})
export class SystemModule {
}
