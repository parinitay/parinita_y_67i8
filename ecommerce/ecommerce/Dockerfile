# Build stage: Use Maven + Java to compile the Spring Boot app
FROM maven:3.9.4-eclipse-temurin-21 AS build

# Set working directory in container
WORKDIR /app

# Copy your entire backend project
COPY . .

RUN mvn dependency:purge-local-repository

# Build the app using Maven, skipping tests
RUN mvn clean package -DskipTests

# ----------------------------

# Run stage: Use lightweight JDK to run the app
FROM eclipse-temurin:21-jre

# Set working directory in final image
WORKDIR /app

# Copy built JAR file from the build stage
COPY --from=build /app/target/ecommerce-0.0.1-SNAPSHOT.jar app.jar

# Expose port (should match `server.port` in your application.properties)
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
