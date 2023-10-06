#!/usr/bin/env node

import { Command } from "commander";
import { initProject } from "./commands/init/index.js";
import { buildSchema } from "./commands/generate/index.js";
import { addPackage } from "./commands/add/index.js";
import { updateConfigFileAfterUpdate } from "./utils.js";

const program = new Command();
program.name("kirimase").description("Kirimase CLI").version("0.0.17");

program
  .command("init")
  .description("initialise and configure kirimase within directory")
  .option("-sf, --has-src-folder <has>", "has a src folder")
  .option("-pm, --package-manager <pm>", "preferred package manager")
  .option("-o, --orm <orm>", "preferred orm")
  .option("-db, --db <db>", "preferred database")
  .option("-a, --auth <auth>", "preferred auth")
  .option("-ap, --auth-providers <auth-providers...>", "auth providers")
  .option("-p, --packages <packages...>", "packages")
  .option("-ie, --include-example <include>", "include example")
  .action(initProject);

program
  .command("generate")
  .description("Generate a new resource")
  .action(buildSchema);

program
  .command("add")
  .description("Add and setup additional packages")
  .option("-sf, --has-src-folder <has>", "has a src folder")
  .option("-pm, --package-manager <pm>", "preferred package manager")
  .option("-o, --orm <orm>", "preferred orm")
  .option("-db, --db <db>", "preferred database")
  .option("-a, --auth <auth>", "preferred auth")
  .option("-ap, --auth-providers <auth-providers...>", "auth providers")
  .option("-p, --packages <packages...>", "packages")
  .option("-ie, --include-example <include>", "include example")
  .action(addPackage);

program
  .command("update-config")
  .description("Update Kirimase config file after update")
  .action(updateConfigFileAfterUpdate);

program.parse(process.argv);
