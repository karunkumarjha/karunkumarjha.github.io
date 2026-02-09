---
title: "Real-Time Event Processing Pipeline"
description: "End-to-end streaming pipeline ingesting clickstream events via Kafka, processing with Spark Structured Streaming, and sinking to a data lakehouse for real-time analytics."
tech: ["Apache Kafka", "Spark Structured Streaming", "Delta Lake", "Python", "Docker"]
github: "https://github.com/karunkumarjha"
order: 1
---

Built a real-time event processing pipeline handling clickstream data at scale. Events flow through Kafka topics, get enriched and transformed via Spark Structured Streaming, and land in Delta Lake tables with ACID guarantees.

**Key highlights:**
- Schema evolution support with Delta Lake
- Exactly-once processing semantics via checkpointing
- Custom dead-letter queue for malformed events
- Monitoring with structured logging and alerting
