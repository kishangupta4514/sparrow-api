import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Models } from "@src/modules/common/enum/ai-services.enum";

export enum LimitArea {
  USER = "user",
  HUB = "hub",
  WORKSPACE = "workspace",
  TESTFLOW = "testflow",
  BLOCK = "block",
  ENVIRONMENT = "environment",
  COLLECTION = "collection",
  TESTFLOW_RUNHISTORY = "testflow-run-history",
  AI = "ai",
  TESTFLOW_SCHEDULE_RUN = "testflow-schedule-run",
  AI_MODELS = "ai-models",
}

export class WorkspaceLimit {
  area: LimitArea.WORKSPACE;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class TestflowLimit {
  area: LimitArea.TESTFLOW;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class BlocksPerTestflow {
  area: LimitArea.BLOCK;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class UsersPerHub {
  area: LimitArea.HUB;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class SelectiveTestflowRun {
  area: LimitArea.TESTFLOW;

  @IsBoolean()
  active: boolean;
}

export class AiRequestsPerMonth {
  area: LimitArea.AI;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class ActiveSync {
  area: LimitArea.COLLECTION;

  @IsBoolean()
  active: boolean;
}
export class TestflowRunHistory {
  area: LimitArea.TESTFLOW_RUNHISTORY;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class TestflowScheduleRun {
  area: LimitArea.TESTFLOW_SCHEDULE_RUN;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}

export class AiModelInfo {
  @IsString()
  @IsNotEmpty()
  name: Models;

  @IsString()
  @IsOptional()
  version?: string;

  @IsBoolean()
  @IsNotEmpty()
  enable: boolean;
}

export class AiModelsLimit {
  area: LimitArea.AI_MODELS;

  @IsNotEmpty()
  value: AiModelInfo[];
}

export class Limits {
  workspacesPerHub: WorkspaceLimit;
  testflowPerWorkspace: TestflowLimit;
  blocksPerTestflow: BlocksPerTestflow;
  usersPerHub: UsersPerHub;
  selectiveTestflowRun: SelectiveTestflowRun;
  aiRequestsPerMonth: AiRequestsPerMonth;
  activeSync: ActiveSync;
  testflowRunHistory: TestflowRunHistory;
  testflowScheduleRun: TestflowScheduleRun;
  aiModels: AiModelsLimit;
}

export class Plan {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  active?: boolean;

  @IsNotEmpty()
  @IsObject()
  limits: Limits;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

  @IsString()
  createdBy: string;

  @IsString()
  updatedBy: string;
}
