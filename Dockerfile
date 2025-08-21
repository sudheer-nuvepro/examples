# Step 1: Build the Spring Boot application
FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /app

# Copy Maven descriptor and source code
COPY pom.xml .
COPY src ./src

# Build the application and skip tests
RUN mvn clean package -DskipTests

# Step 2: Create a lightweight runtime image
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built jar file from the build stage
COPY --from=build /app/target/contact-manager-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
