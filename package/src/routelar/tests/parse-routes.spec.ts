import { resolve } from 'path';
import { readFileSync } from 'fs';
import { WorkspaceSchema } from '@angular-devkit/core/src/experimental/workspace';
import { Project } from 'ts-morph';

describe('parseProject', () => {
  const PROJECT_NAME = 'test-app';
  const pathRelativeAngularJSON = '../../../angular.json';
  const pathToJSON = resolve(__dirname, pathRelativeAngularJSON);
  const content = JSON.parse(
    readFileSync(pathToJSON).toString()
  ) as WorkspaceSchema;
  const relativePathToTS = '../../../fixtures/test-app/tsconfig.app.json';
  const pathToTS = resolve(__dirname, relativePathToTS);

  it('should be parse project', () => {
    const project = new Project({
      tsConfigFilePath: pathToTS,
      addFilesFromTsConfig: true
    });

    expect(project).toBeDefined();
  });
});
