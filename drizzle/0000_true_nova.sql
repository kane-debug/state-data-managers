CREATE TABLE "api_keys" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar(64) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	"expires_at" timestamp,
	CONSTRAINT "api_keys_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE "senate_composition" (
	"id" serial PRIMARY KEY NOT NULL,
	"democrats" integer NOT NULL,
	"republicans" integer NOT NULL,
	"independents" integer NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "senate_leadership" (
	"id" serial PRIMARY KEY NOT NULL,
	"position" varchar(50) NOT NULL,
	"name" varchar(100) NOT NULL,
	"party" varchar(1) NOT NULL,
	"state" varchar(2) NOT NULL,
	"since" varchar(4) NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "senate_schedule" (
	"id" serial PRIMARY KEY NOT NULL,
	"bill_id" varchar(50) NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"expected_date" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "senate_votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"vote_id" varchar(50) NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"status" varchar(20) NOT NULL,
	"vote_count" varchar(20),
	"vote_date" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now()
);
